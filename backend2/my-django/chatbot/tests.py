import pandas as pd
from django.http import JsonResponse
from django.shortcuts import render
from icecream import ic

from torch.utils.data import DataLoader, Dataset
from sklearn.preprocessing import LabelEncoder


data = 'C:\\Users\\bitcamp\\___\\djangnlp\\backend2\\my-django\\chatbot\\data'


class Chatdataset(Dataset):
    def __init__(self):
        pass

    def __len__(self):
        pass

    def __getitem__(self, item):
        pass


def chattrain():
    data = pd.read_csv('./data/intent_data(weather).csv')
    # print(data)

    training_sentences = []
    tranining_labels = []
    responses = []

    for question in data['Q']:
        training_sentences.append(question)
        tranining_labels.append(data['label'])

    lbl_encoder = LabelEncoder()
    lbl_encoder.fit(tranining_labels)
    labels = lbl_encoder.transform(tranining_labels)



if __name__ == '__main__':
    chattrain()