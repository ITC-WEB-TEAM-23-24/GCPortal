# Generated by Django 4.1.7 on 2023-07-04 06:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scorecard', '0007_alter_gcevent_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gcevent',
            name='genre',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='gcevent',
            name='poster',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
