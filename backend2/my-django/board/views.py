from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
import icecream as ic

from board.model_data import DbUploader



@api_view(['GET'])
@parser_classes([JSONParser])
def upload(request):
    print('######## 1 ########')
    DbUploader().insert_data()
    return JsonResponse({'Product Upload': 'SUCCEESS'})
