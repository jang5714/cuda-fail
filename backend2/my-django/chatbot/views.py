from django.http import JsonResponse
from django.shortcuts import render

# Create your views here.
def chatbot(request):
    context = {}
    return JsonResponse(data=context, safe=False)


def sendchatbot(request):
    return JsonResponse({'Send' : 'SUCCESS'})