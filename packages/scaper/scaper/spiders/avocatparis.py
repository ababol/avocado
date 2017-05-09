# -*- coding: utf-8 -*-
import scrapy
from urllib import parse
from unidecode import unidecode

class AvocatparisSpider(scrapy.Spider):
    name = "avocatparis"
    allowed_domains = ["avocatsparis.org"]

    def start_requests(self):
        for page in range(1,100):
            yield scrapy.Request('http://www.avocatsparis.org/Eannuaire/CMSListeRecherche.aspx?Pre=&ChReNom=2&Adr=&Arr=-1&mail=False&Site=False&Toque=&etranger=False&i=%s' % page, self.parse)

    def parse(self, response):
        for row in response.css('#_ctl0_Corps_dgListeResultat .principal .data > table'):
            rowName = row.css('tr:nth-child(1)')
            valueName = rowName.css('strong::text').extract_first()
            url = parse.urlparse(rowName.css('a::attr(href)').extract_first())
            query = parse.parse_qs(url.query)
            id = unidecode('%s-%s') % (valueName.lower().replace(' ', '-'), query.get('cnbf', 'code_groupe')[0])

            rowTel = row.css('tr:nth-child(2)')
            valueTel = rowTel.css('.coprs2 .newannuair10px::text').extract_first()

            rowAddressFax = row.css('tr:nth-child(3)')
            valueAddress = rowAddressFax.css('td .newannuair10px::text').extract_first()
            if valueAddress is not None:
                valueAddress = valueAddress.replace('     ', ',')

            valueFax = rowAddressFax.css('td .lien3::text').extract_first()

            rowMail = row.css('tr:nth-child(4)')
            valueMail = rowMail.css('.lien3 a::text').extract_first()

            yield {
                'id': id,
                'name': valueName,
                'tel': valueTel,
                'address': valueAddress,
                'fax': valueFax,
                'mail': valueMail
            }
