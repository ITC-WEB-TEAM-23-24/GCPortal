# Generated by Django 4.2.2 on 2023-06-29 10:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scorecard', '0005_gcevent_end_timeline_gcevent_start_timeline'),
    ]

    operations = [
        migrations.AlterField(
            model_name='score',
            name='hostel',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='scorecard.hostel'),
        ),
        migrations.AlterField(
            model_name='score',
            name='score',
            field=models.IntegerField(null=True),
        ),
    ]
