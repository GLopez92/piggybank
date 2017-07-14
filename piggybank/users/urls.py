from django.conf.urls import url

from . import views

app_name = 'users'

urlpatterns = [
    url(r'^index/$', views.index , name='index'),
    url(r'^account/$', views.account , name='account'),
    url(r'^signIn/$', views.signIn , name='sign-in'),
]