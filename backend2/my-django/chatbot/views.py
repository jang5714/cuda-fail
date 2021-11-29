import pandas as pd
from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
from rest_framework.decorators import api_view
data = 'C:\\Users\\bitcamp\\___\\djangnlp\\backend2\\my-django\\chatbot\\data'


@api_view(['GET'])
def chatanswer(request):
    pass

