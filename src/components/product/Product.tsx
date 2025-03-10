"use client";
import React, { useEffect } from "react";

const Product: React.FC = () => {
  useEffect(() => {
    fetch("/batch", {
      headers: {
        "x-nv-device": "sp",
        "x-nv-security-magic":
          "mk4bHEqmVrUGmxxD7sEMfwkgjBceXTtuAFkxG6aeQTQ3xtCbqpgkttUvt5m7KjNS",
      },
      referrer: "http://localhost:3000/",
      body: '{"integrations":{},"context":{"device":{"model":"Mac OS","id":"93575126-1c4c-4b0f-86e5-ba9df7f1691b"},"os":{"name":"Chrome","version":"133.0.0.0"},"hs_site":"Web","traits":{"user_type":"PU","hs_device_id":"93575126-1c4c-4b0f-86e5-ba9df7f1691b","hs_site":"Web","hs_framework":"nextjs","utm_source":"none","utm_medium":"none","utm_campaign":"none","utm_term":"none","utm_content":"none","utm_date":"none","experiments":["cloneissue_baseline","xltiles_v1","promovisibility_v1","codposition2_baseline","sortbardisableandroid_v1","e2erefunds_v1","cartmigration_v1","codfeeweb_v1","image_v1","searchexp_v2","bucketsort_v2","regseg_v1","trackhomepage_v1","sdgdhhfdh_itc","completesearch_es","rectsqexpkey_v1","expressdeliveryenabled_v2","doorwayexp_v1"],"in_app_browser":"","user_agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36","hs_referrer":"https://qa.hopscotch.in/products/12036/testdoorwas15+-+12036","last_visit_date":"2025-03-07T10:33:08.000Z","days_since_last_visit":"7"},"page":{"path":"/product/921672/red-applique-heart-printed-half-sleeves-top-and-shorts-set","referrer":"https://qa.hopscotch.in/products/12036/testdoorwas15+-+12036","search":"?funnel=Discover&funnel_tile=CT1547&funnel_section=New&section=from_plp&from_screen=products&source_tile_type=Normal","title":"Shop Online Red Applique Heart Printed Half Sleeves Top and Shorts Set at ₹476","url":"https://qa.hopscotch.in/product/921672/red-applique-heart-printed-half-sleeves-top-and-shorts-set?funnel=Discover&funnel_tile=CT1547&funnel_section=New&section=from_plp&from_screen=products&source_tile_type=Normal"},"userAgent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36","library":{"name":"analytics.js","version":"2.11.0"},"campaign":{}},"properties":{"funnel":"Discover","resetFunnel":"","funnel_tile":"CT1547","funnel_section":"New","source":"","section":"from_plp","from_screen":"TestDoorwas15","sortbar_group":"","sortbar":"All","character":"Not applicable","sort_by":"User","universal":"None","currency":"INR","quickshop":"No","extraSegdata":null,"product_id":921672,"sku":["YAH-2954798","YAH-2954799","YAH-2954800","YAH-2954801"],"name":"Red Applique Heart Printed Half Sleeves Top and Shorts Set","brand":"yaohui","price":476,"value":476,"mrp":999,"discount_percentage":52,"category":"Apparel - Children","subcategory":"Sets","product_type":"Short set","subproduct_type":"hello123456","preorder":null,"sale":"yes","gender":"Girl\'s","colour":"Red","low_inventory":"yes","delivery_days":45,"from_age":"9","to_age":"12","sizes":4,"content_name":"Red Applique Heart Printed Half Sleeves Top and Shorts Set","content_ids":[921672],"content_type":"product","contents":[{"id":921672,"quantity":1,"item_price":476}],"return":"15 Days Return","edd":"4-5 days","v_country":"Rest","merch_type":"Catalog","hbt":"T1","key_colour":"Red","season":"All Season","size":"9-12 months","year":"2019","add_from":"current=/product/921672/red-applique-heart-printed-half-sleeves-top-and-shorts-set","source_tile_type":"Normal","[time] hour_of_day":16,"[time] day_of_week":6,"[time] day_of_month":7,"[time] month_of_year":3,"[time] week_of_year":10,"_session_start_time":"1741343588872"},"event":"product_viewed","messageId":"ajs-29eee975624ddd4ea8c1e0a700ba7046","anonymousId":"658417f1-2bfa-43b6-aa97-acf627fce489","timestamp":"2025-03-07T10:33:19.053Z","type":"track","writeKey":"7PuAhLP93vH2bthCMGeSLTrWGYrKD1Xb","userId":5674864,"sentAt":"2025-03-07T10:33:19.054Z","_metadata":{"bundled":["Segment.io","Facebook Pixel"],"unbundled":[]}}',
      method: "POST",
    });
  }, []);

  return <h1>Product Component</h1>;
};

export default Product;
