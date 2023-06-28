from django.db import models
from django.utils.timezone import now


class Hostel(models.Model):
    name = models.CharField(max_length=100)
    number = models.IntegerField()

    def __str__(self):
        return self.name


class GCEvent(models.Model):
    name = models.CharField(max_length=100, blank=False)
    description = models.TextField()
    poster = models.ImageField(blank=False, null=True)
    start_timeline = models.DateTimeField(default=now, blank=True)
    end_timeline = models.DateTimeField(default=now, blank=True)
    genre = models.CharField(max_length=50, null=True, blank=False)

    def __str__(self):
        return self.name


class Score(models.Model):
    hostel = models.ForeignKey(Hostel, on_delete=models.CASCADE)
    event = models.ForeignKey(GCEvent, on_delete=models.CASCADE)
    score = models.IntegerField()

    def __str__(self):
        return f"{self.hostel} - {self.event}: {self.score}"
