# Generated by Django 2.2 on 2020-07-31 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('tweets', '0006_auto_20200731_2322'),
    ]

    operations = [
        migrations.AlterField(
            model_name='tweet',
            name='timestamp',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]