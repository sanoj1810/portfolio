from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import send_mail

def homepage(request):
    if request.method == 'POST':
        name = request.POST.get("name")
        email = request.POST.get("email")
        subject = request.POST.get("subject")
        message = request.POST.get("message")
        
        data = {
            'name' : name,
            'email' : email,
            'subject': subject,
            'message' : message
        }
        message = '''
        New message : {}
        
        FROM : {}
        '''.format(data['message'],data['email'])
        send_mail(data['subject'],message, '', ['sanojappu20@gmail.com'])
        
    return render(request,"index.html")