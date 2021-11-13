from django.conf.urls import url
from django.contrib import admin
from django.urls import path, include

from board import views

urlpatterns = [
    url(r'upload', views.upload),
]