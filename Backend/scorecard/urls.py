from django.urls import path
from .views import *

urlpatterns = [
    path('creategc/', creategc, name='create-gc'),
    path('backend/score', backendgc, name='backend-gc'),
    path('backend/score/<int:id>', backendgcscore, name='backend-gc-scores'),
    path('overall/', overall, name='OverallGC'),
    path('genre<str:genre>/', genrewise_scorecard, name='Genre_scorecard'),
    path('GC<int:id>/', individualgc, name='IndividualGC'),
    path('hostel<str:name>/', hostel_scorecard, name='Hostel_scorecard'),
    path('gc/<str:genre>/', gc_events, name='gc_events')
]
