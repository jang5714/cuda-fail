from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from board.model_data import DbUploader
from board.models import Board
from board.serializers import BoardSerializer
from user.models import User


@api_view(['GET','POST','PUT', 'DELETE'])
@parser_classes([JSONParser])
def board(request):
    try:
        if request.method == 'POST':
            new = request.data
            u = User()
            user = User.objects.all().filter(id=new['writen']).values()[0]
            u.id = user['id']
            Board.objects.create(title=new['title'],
                                 body=new['body'],
                                 comment=new['comment'],
                                 writen=u,
                                 create_at=new['create_at'],
                                 update_at=new['update_at'])

            return JsonResponse({'게시판': '등록 완료'})
        elif request.method == 'GET':
            boardlist = Board.objects.all().values()
            serializer = BoardSerializer(boardlist, many=True)
            return JsonResponse(data=serializer.data, safe=False)
        elif request.method == 'PUT':
            modifyboard = request.data
            board = Board.objects.get(id=modifyboard['id'])
            dbboard = Board.objects.all().filter(id=modifyboard['id']).values()[0]
            print(dbboard['title'])
            dbboard['title'] = modifyboard['title']
            dbboard['body'] = modifyboard['body']
            dbboard['comment'] = modifyboard['title']
            dbboard['writen_id'] = modifyboard['writen_id']
            dbboard['create_at'] = modifyboard['create_at']
            dbboard['create_at'] = modifyboard['create_at']
            dbboard.save()
            print(f'변경 후 : {dbboard}')
            serializer = BoardSerializer(data=dbboard)
            print("**********************************************")
            if serializer.is_valid():
                serializer.update(board, dbboard)
            return JsonResponse({'board modify': 'SUCCESS'})
        elif request.method == 'DELETE':
            dbboard = Board.objects.get(title=request.data['title'])
            if request.data['title'] == dbboard.title:
                dbboard.delete()
            return JsonResponse({'board delete': 'SUCCESS'})
    except:
        return JsonResponse({'board': 'fail'})


@api_view(['GET'])
def find(request):
    try:
        findboard = request.data
        dbboard = Board.objects.all().filter(id=findboard['id']).values()[0]
        return JsonResponse(data=dbboard, safe=False)
    except:
        return JsonResponse({'find': 'fail'})


@api_view(['GET'])
@parser_classes([JSONParser])
def upload(request):
    print('######## 1 ########')
    DbUploader().insert_data()
    return JsonResponse({'Product Upload': 'SUCCEESS'})
