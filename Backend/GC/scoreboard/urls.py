from django.urls import path
from .views import individualgc, overall, hostel_scorecard, genrewise_scorecard

urlpatterns = [
    path('overall/', overall, name='OverallGC'),
    path('genre<str:genre>/', genrewise_scorecard, name='Genre_scorecard'),
    path('GC<int:id>/', individualgc, name='IndividualGC'),
    path('hostel<str:name>/', hostel_scorecard, name='Hostel_scorecard')
]
