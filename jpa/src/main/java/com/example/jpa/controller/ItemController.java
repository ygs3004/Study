package com.example.jpa.controller;

import com.example.jpa.model.entity.Book;
import com.example.jpa.model.entity.Item;
import com.example.jpa.service.ItemService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("/items")
@RequiredArgsConstructor
public class ItemController {

    private final ItemService itemService;

    /* 목록조회 */
    @GetMapping
    public String list(Model model) {
        List<Item> items = itemService.findItems();
        model.addAttribute("items", items);
        return "items/itemList";
    }

    /* 상품생성 */
    @GetMapping("/new")
    public String createForm(Model model) {
        return "/items/createItemForm";
    }

    @PostMapping("/new")
    public String create(Book item) {
        itemService.saveItem(item);
        return "redirect:/items";
    }

    /* 상품 수정 */
    @GetMapping("/{itemId}/edit")
    public String updateItemForm(@PathVariable("itemId") Long itemId, Model model) {
        Item item = itemService.findOne(itemId);
        model.addAttribute("item", item);
        return "items/updateItemForm";
    }

    @PostMapping("/{itemId}/edit")
    public String updateItem(@ModelAttribute("item") Book item) {
        itemService.saveItem(item);
        return "redirect:/items";
    }

}
