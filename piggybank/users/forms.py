from django import forms

class UserForm(forms.Form):

    username = forms.CharField(label='First Name', max_length=256)

    password = forms.CharField(label='Last Name', max_length=256)

    email = forms.EmailField(label='Email', max_length=256)


