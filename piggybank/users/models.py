from __future__ import unicode_literals

from django.db import models

# Create your models here.

class User(models.Model):

    username = models.CharField(max_length=256, blank=False, null=False)

    password = models.CharField(max_length=256, blank=False, null=False)

    email = models.EmailField(max_length=256, blank=False, null=False)

    accountBalance = models.IntegerField(blank=True, null=True)
