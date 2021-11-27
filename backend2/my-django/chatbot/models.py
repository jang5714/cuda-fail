from django.db import models


# Create your models here.
class Chatbot(models.Model):
    use_in_migrations = True
    intent = models.TextField()
    ner = models.TextField()
    query = models.TextField()
    answer = models.TextField()

    def __str__(self):
        return f'{self.pk}'

    class Meta:
        db_table = "chatbot_train_data"

