import urllib, logging
from django.utils import simplejson as json
from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.contrib.sites.models import Site

##
## Shows the main view.
##
def index(request):
    host = request.META.get('HTTP_HOST')
    return render_to_response('app/index.html', {'host': host})  

##
## Is used for the tweeting ajax call.
##
def update(request):
    logging.info('update!')

    username = request.GET.get('username')
    password = request.GET.get('password')
    text = request.GET.get('text')
    lat = request.GET.get('lat')
    long = request.GET.get('long')

    params = urllib.urlencode({'status': text, 'lat': lat, 'long': long})
    f = urllib.urlopen('http://' + username + ':' + password + '@twitter.com/statuses/update.json', params)
    response = f.read()
   
    return HttpResponse(response)


