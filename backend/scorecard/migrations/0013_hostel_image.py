# Generated by Django 4.1.7 on 2023-07-12 11:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scorecard', '0012_alter_gcevent_poster'),
    ]

    operations = [
        migrations.AddField(
            model_name='hostel',
            name='image',
            field=models.ImageField(default='', upload_to='hostel_img/'),
        ),
    ]