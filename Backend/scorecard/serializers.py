from rest_framework import serializers
from .models import Score, GCEvent


class scoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = ('hostel', 'event', 'score')


class gcserializer(serializers.ModelSerializer):
    class Meta:
        model = GCEvent
        fields = '__all__'
