from django.shortcuts import render
from django.core.mail import send_mail, BadHeaderError
from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from .forms import ContactForm

# Create your views here.
def index(request):
  return render(request,'index.html')

def emailView(request):
    if request.method == 'GET':
        form = ContactForm()
    else:
        form = ContactForm(request.POST)
        if form.is_valid():
            name = request.POST['name']
            from_email = request.POST['from_email']
            message = request.POST['message']
            try:
                send_mail(name, message, from_email, ['d.g.j.mertens@gmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
    return render(request, "email.html", {'form': form})


