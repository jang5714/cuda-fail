import csv

from chatbot.models import Chatbot
from common.models import ValueObject, Reader, Printer


class ChatDbUploader():
    def __init__(self):
        vo = ValueObject()
        reader = Reader()
        self.printer = Printer()
        vo.context = 'chatbot/data/'
        vo.fname = 'ChatBotData.csv'
        self.csvfile = reader.new_file(vo)

    def insert_data(self):
        self.insert_chatbot()
        print('##########  2  ##########')

    def insert_chatbot(self):
        with open(self.csvfile, newline='', encoding='utf8') as f:
            data_reader = csv.DictReader(f)
            for row in data_reader:
                if not Chatbot.objects.filter(user_email=row['user_email']).exists():
                    chatbot = Chatbot.objects.create(user_email=row['user_email'],
                                               password= row['password'],
                                               user_name=row['user_name'],
                                               phone=row['phone'],
                                               age=row['age'],
                                               address=row['address'],
                                               job=row['job'],
                                               user_interests=row['user_interests'],
                                               login_type=row['login_type'],)
                    print(f'1 >>>> {chatbot}')
        print('Chatbot DATA UPLOADED SUCCESSFULY!')