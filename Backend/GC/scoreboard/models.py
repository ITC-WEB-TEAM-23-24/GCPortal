from django.db import models

# Create your models here.


class GC(models.Model):
    id = models.IntegerField(primary_key=True)
    GC_name = models.CharField(max_length=50, blank=False)
    description = models.TextField()
    poster = models.ImageField()
    timeline = models.DateTimeField()
    genre = models.CharField(max_length=40)

    def __str__(self) -> str:
        return self.GC_name


class hostel(models.Model):
    name = models.CharField(max_length=20, blank=False)
    number = models.IntegerField(blank=False, null=False)
    event = models.ManyToManyField(GC)
    hostel_score = models.IntegerField()

    def __str__(self) -> str:
        return self.name
