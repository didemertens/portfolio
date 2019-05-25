from django.urls import path

from .views import index, emailView

urlpatterns = [
    path('', index, name="index"),
    path('email/', emailView, name='email'),
    # path('success/', successView, name='success'),
]
