from django.conf.urls.defaults import *

urlpatterns = patterns('',
    ('^$', 'client.views.index'),
)
