# users/serializers.py
from rest_framework import serializers
from django.contrib.auth import get_user_model

class UserRegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = get_user_model()
        fields = ['email', 'name', 'password']

    def create(self, validated_data):
        user = get_user_model().objects.create_user(
            email=validated_data['email'],
            username=validated_data['email'].split('@')[0],  # Generate username from email
            name=validated_data['name'],
            password=validated_data['password']
        )
        return user

class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')
        user = CustomUser.objects.filter(email=email).first()
        if user and user.check_password(password):
            refresh = RefreshToken.for_user(user)
            attrs['refresh'] = str(refresh)
            attrs['access'] = str(refresh.access_token)
            return attrs
        raise serializers.ValidationError("Invalid email or password")
