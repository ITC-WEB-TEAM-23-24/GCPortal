from django.shortcuts import render
from django.http import response, HttpResponse, JsonResponse
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import GC, hostel
from .serializers import hostelSerializer
from django.db.models import Sum
import datetime

# Create your views here.


@api_view(['GET'])
def overall(request):
    hostels = hostel.objects.all()
    distinct = hostels.values('name').distinct()  # this is a queryset
    for item in distinct:  # item is a dict of key and value(hostel name)
        value = item['name']
        host = hostel.objects.filter(name=value)

        total = sum(some.hostel_score for some in host)
        item['total score'] = total
    # print(type(distinct))
    data = list(distinct)
    # print(type(data))

    # return Response(distinct)
    return JsonResponse(data, safe=False)


@api_view(['GET'])
def genrewise_scorecard(request, genre):
    gcs = GC.objects.filter(genre=genre)
    # all hostel objects within req genre
    # hostels = hostel.objects.filter(event=gc)
    hostels = hostel.objects.all()
    distinct1 = hostels.values('name').distinct()  # this is a queryset

    for item in distinct1:  # item is a dict of key and value(hostel name)
        value = item['name']
        total = 0
        for gc in gcs:
            host = hostel.objects.filter(name=value, event=gc)
            subtotal = sum(some.hostel_score for some in host)
            total = total+subtotal

        item['total score'] = total

    data = list(distinct1)

    return JsonResponse(data, safe=False)


@api_view(['GET'])
def individualgc(request, id):
    gc = GC.objects.get(id=id)
    # if gc.timeline <= datetime.datetime.now():
    if 2 > 1:
        # fetch scores of particular GC and show
        hostels = hostel.objects.filter(event=gc)
        serializer = hostelSerializer(hostels, many=True)
        return Response(serializer.data)
    else:
        return HttpResponse("NO SCORE TO SHOW YET")  # GC has not yet ended


@api_view(['GET'])
def hostel_scorecard(request, name):
    hostels = hostel.objects.filter(name=name)
    serializer = hostelSerializer(hostels, many=True)
    print(type(serializer.data))

    return Response(serializer.data)
