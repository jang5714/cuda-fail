from rest_framework import serializers
# pip install Django django-rest-framework
from .models import User as user

# user_email = models.TextField()
# password = models.CharField(max_length=10)
# user_name = models.TextField()
# phone = models.TextField()
# age = models.TextField()
# address = models.TextField()
# job = models.TextField()
# user_interests = models.TextField()
# login_type = models.TextField()


class UserSerializer(serializers.Serializer):
    user_email = serializers.CharField()
    password = serializers.CharField()
    user_name = serializers.CharField()
    phone = serializers.CharField()
    birth = serializers.CharField()
    address = serializers.CharField()
    job = serializers.CharField()
    user_interests = serializers.CharField()
    login_type = serializers.CharField()

    class Meta:
        model = user
        fields = '__all__'

    def create(self, validated_data):
        return user.objects.create(**validated_data)

    def update(self, instance, validated_data):
        user.objects.filter(pk=instance.id).update(**validated_data)