# Generated by Django 4.1.7 on 2023-06-28 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scorecard', '0002_gcevent_genre_gcevent_poster'),
    ]

    operations = [
        migrations.AlterField(
            model_name='score',
            name='score',
            field=models.IntegerField(default=0),
        ),
    ]
