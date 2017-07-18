from django.http import Http404, HttpResponse

from django.shortcuts import redirect, render

from django.views.decorators.csrf import csrf_exempt

from .forms import UserForm

from .models import User

# Create your views here.

@csrf_exempt
def index(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            # Create and save directly.
            User(
             username=form.cleaned_data['username'], 
             password=form.cleaned_data['password'],
             email=form.cleaned_data['email']).save()
        
            return redirect('users:account')
        else:
            # Render form with errors.
            return render(request, 'users/index.html', { 'form' : form })
    else:
        # If the user sends a GET request...
        context = { 'header' : 'GET', 'form' : UserForm() }
        return render(request, 'users/index.html', context)

@csrf_exempt
def account(request):
	return render(request, 'users/account.html')

@csrf_exempt
def signIn(request):
    if request.method == 'POST':
        form = UserForm(request.POST)
        if form.is_valid():
            # Create and save directly.
            User(
             username=form.cleaned_data['username'], 
             password=form.cleaned_data['password']).save()
        
            return redirect('users:account')
        else:
            # Render form with errors.
            return render(request, 'users/index.html', { 'form' : form })
    else:
        # If the user sends a GET request...
        context = { 'header' : 'GET', 'form' : UserForm() }
        return render(request, 'users/signIn.html', context)
