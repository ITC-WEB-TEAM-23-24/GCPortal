# Generated by Django 4.1.7 on 2023-07-04 06:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scorecard', '0008_alter_gcevent_genre_alter_gcevent_poster'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gcevent',
            name='poster',
            field=models.ImageField(blank=True, null=True, upload_to='posters/'),
        ),
    ]