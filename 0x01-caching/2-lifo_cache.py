#!/usr/bin/python3
'''LIFO caching Module
'''
from base_caching import BaseCaching


class LIFOCache(BaseCaching):
    '''Represents an object which Inherited from
    BaseCaching and is a caching system
    '''

    def __init__(self):
        '''Initilize the object'''
        super().__init__()
        self.queue = []

    def put(self, key, item):
        '''Insert cache data using the LIFO method
        '''

        if key is None or item is None:
            return

        if len(self.cache_data) >= self.MAX_ITEMS:
            tobe_discard = self.queue.pop()
            print('DISCARD: {}'.format(tobe_discard))
            del self.cache_data[tobe_discard]

        self.queue.append(key)
        self.cache_data[key] = item

    def get(self, key):
        '''returns cache data linked to the key
        '''

        if key is None or key not in self.cache_data:
            return

        return self.cache_data[key]
