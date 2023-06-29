from django import forms
# from django.forms import formset_factory
from .models import Score


class ScoreForm(forms.ModelForm):
    class Meta:
        model = Score
        fields = ['hostel', 'event', 'score']


# ScoreFormSet = formset_factory(ScoreForm, extra=0)
