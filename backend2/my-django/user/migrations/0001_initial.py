# Generated by Django 3.2.9 on 2021-11-15 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_email', models.TextField()),
                ('password', models.CharField(max_length=10)),
                ('user_name', models.TextField()),
                ('phone', models.TextField()),
                ('age', models.TextField()),
                ('address', models.TextField(blank=True)),
                ('job', models.TextField()),
                ('user_interests', models.TextField()),
                ('login_type', models.TextField()),
            ],
            options={
                'db_table': 'users',
            },
        ),
    ]