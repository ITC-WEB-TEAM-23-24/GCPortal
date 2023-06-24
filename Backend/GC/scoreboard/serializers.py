from rest_framework import serializers
from .models import GC, hostel


class hostelSerializer(serializers.ModelSerializer):
    class Meta:
        model = hostel
        fields = ('name', 'event', 'hostel_score', 'number')
