import urllib, logging
from django.utils import simplejson as json
from django.shortcuts import render_to_response
from django.http import HttpResponse
from django.contrib.sites.models import Site

def index(request):
    #domain = 'http://%s' % (Site.objects.get_current().domain)
    #logging.info('domain: ' + domain)
    
    #logging.info('req: ' + str(request))
    

    host = request.META.get('HTTP_HOST')

    return render_to_response('app/index.html', {'host': host})  

#    return HttpResponse("twittericsson")



def update(request):
    logging.info('update!')
    logging.info('request: ' + str(request))

    user = 'nerd_dev'
    passwd = '12wR4vKL4..S'
    
    text = request.GET.get('text')
    
#    res = None
#    logging.info("key: " + str(key))

    params = urllib.urlencode({'status': text})
    f = urllib.urlopen('http://nerd_dev:12wR4vKL4..S@twitter.com/statuses/update.json', params)
    
    #response = json.loads(f.read())

   # return render_to_response(f.read())

    return HttpResponse(f.read())


