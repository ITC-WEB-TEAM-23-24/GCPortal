from rest_framework import serializers
from .models import Score


class scoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Score
        fields = ('hostel','event','score')
