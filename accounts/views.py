from django.shortcuts import render,redirect
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django.contrib.auth import login,logout

# Create your views here.
def login_view(request, *arge,**kwargs):
    from = AuthenticationForm(request, data=request.POST or None)
    if form.is_valid():
        user_=form.get_user()
        login(request,user_)
        return redirect("/")
    return render(request,"form.html",{"form":form})