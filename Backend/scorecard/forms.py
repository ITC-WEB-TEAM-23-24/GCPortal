from django import forms
from .models import GCEvent


class gcForm(forms.ModelForm):
    class Meta:
        model = GCEvent
        fields = '__all__'
