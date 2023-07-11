from django.http import response, HttpResponse, JsonResponse
from rest_framework.response import Response
from .serializers import scoreSerializer
from django import forms
from rest_framework.decorators import api_view
from django.shortcuts import render, redirect
from .models import GCEvent, Hostel, Score
from .forms import gcForm
from django.utils.timezone import now
from django.db.models import Value,IntegerField
from django.core import serializers


def creategc(request):
    myform = gcForm(request.POST, request.FILES or None)
    if myform.is_valid():
        myform.save()
        return HttpResponse("Success")
    context = {
        'form': myform,
    }
    return render(request, "creategc.html", context)


def backendgc(request):
    events = GCEvent.objects.all()
    context = {'events': events}
    return render(request, "backendgc.html", context)


def backendgcscore(request, id):
    event = GCEvent.objects.get(id=id)
    hostels = Hostel.objects.all()
    context = {'events': event,
               'hostels': hostels
               }

    if request.method == 'POST':
        for hostel in hostels:
            value = request.POST[hostel.name]
            Score.objects.create(event=event, hostel=hostel, score=value)
        return HttpResponse("Success")
    return render(request, "backendscore.html", context)


@api_view(['GET'])
def overall(request):
    scorecard = list(Hostel.objects.all().values('name'))
    
    for item in scorecard:
        value = item['name']
        host = Hostel.objects.get(name=value)
        scores = Score.objects.filter(hostel=host)

        total = sum(some.score for some in scores)
        item['total_score'] = total
    
    scorecard = sorted(scorecard, key=lambda x: x['total_score'],reverse=True)
    for rank, item in enumerate(scorecard, start=1):
        item['rank'] = rank

    return Response(scorecard)


@api_view(['GET'])
def genrewise_scorecard(request, genre):  # Return individual GC details
    Genre = GCEvent.objects.filter(genre=genre)
    scorecard=list(Hostel.objects.all().values('name'))
    for item in scorecard:
        value = item['name']
        host = Hostel.objects.get(name=value)
        total = 0
        for Event in Genre:
            scores = Score.objects.filter(hostel=host, event=Event)
            subtotal = sum(some.score for some in scores)
            total = total+subtotal
        item['total_score'] = total
    
    scorecard=sorted(scorecard,key=lambda x: x['total_score'],reverse=True)
    
    for rank,item in enumerate(scorecard, start=1):
        item['rank']=rank

    GC_details = Genre.values()
    return Response({
        "scorecard":scorecard,
        "gc":GC_details
    })


@api_view(['GET'])
def individualgc(request, id):  # GC ke details return
    gc = GCEvent.objects.get(id=id)
    GC = GCEvent.objects.filter(id=id).values() #GC details to send to frontend

    # if gc.timeline <= datetime.datetime.now():
    if 2 > 1:
        scores = Score.objects.filter(event=gc).values()       
        return Response({
            "scores":scores,
            "gc":GC
        })
    else:
        return HttpResponse("NO SCORE TO SHOW YET")  # GC has not yet ended


@api_view(['GET'])
def hostel_scorecard(request, name):
    hostels = Hostel.objects.get(name=name)
    scores = Score.objects.filter(hostel=hostels)
    serializer = scoreSerializer(scores, many=True)

    return Response(serializer.data)