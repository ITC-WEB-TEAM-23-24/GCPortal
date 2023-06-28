from django.http import response, HttpResponse, JsonResponse
from rest_framework.response import Response
from .serializers import scoreSerializer
from django import forms
from rest_framework.decorators import api_view
from django.shortcuts import render, redirect
from .models import GCEvent, Hostel, Score
from .forms import ScoreForm


def enter_score(request):
    # event = GCEvent.objects.get(id=eventid)
    form = ScoreForm(request.POST or None)
    if form.is_valid():
        form.save()
    context = {
        'form': form
    }
    return render(request, "enter_scores.html", context)


@api_view(['GET'])
def individualgc(request, id):
    gc = GCEvent.objects.get(id=id)
    # if gc.end_timeline <= datetime.datetime.now():
    if 2 > 1:
        # fetch scores of particular GC and show
        scores = Score.objects.filter(event=gc)
        serializer = scoreSerializer(scores, many=True)
        return Response(serializer.data)
    else:
        return HttpResponse("NO SCORE TO SHOW YET")  # GC has not yet ended


@api_view(['GET'])
def hostel_scorecard(request, name):
    hostels = Hostel.objects.get(name=name)
    scores = Score.objects.filter(hostel=hostels)
    serializer = scoreSerializer(scores, many=True)
    print(type(serializer.data))

    return Response(serializer.data)


@api_view(['GET'])
def overall(request):
    hostels = Hostel.objects.all()
    scorecard = hostels.values('name')
    for item in scorecard:
        value = item['name']
        host = Hostel.objects.get(name=value)
        scores = Score.objects.filter(hostel=host)

        total = sum(some.score for some in scores)
        item['Total score'] = total

    data = list(scorecard)
    return JsonResponse(data, safe=False)


@api_view(['GET'])
def genrewise_scorecard(request, genre):
    Genre = GCEvent.objects.filter(genre=genre)
    hostels = Hostel.objects.all()
    scorecard = hostels.values('name')
    for item in scorecard:
        value = item['name']
        host = Hostel.objects.get(name=value)
        total = 0
        for Event in Genre:
            scores = Score.objects.filter(hostel=host, event=Event)
            subtotal = sum(some.score for some in scores)
            total = total+subtotal
        item['Total score'] = total
    data = list(scorecard)
    return JsonResponse(data, safe=False)
