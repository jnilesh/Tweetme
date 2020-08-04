from django.urls import path

from .views import (
    user_follow_view,
    profile_detail_api_view,
)
'''
CLIENT
Base ENDPOINT /api/profile/
'''
urlpatterns = [
    path('<str:username>/follow', user_follow_view),
    path('<str:username>/', profile_detail_api_view),

]