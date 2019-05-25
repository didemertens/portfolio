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
            name = form.cleaned_data['name']
            from_email = form.cleaned_data['from_email']
            message = form.cleaned_data['message']
            try:
                send_mail(name, message, from_email, ['dideveldhuijzen@hotmail.com'])
            except BadHeaderError:
                return HttpResponse('Invalid header found.')
            # return redirect('success')
    return render(request, "email.html", {'form': form})

# def successView(request):
#     return HttpResponse("Thank you for your message! I'll get back to you as soon as possible.")
