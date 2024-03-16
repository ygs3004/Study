package com.example.jpa.service;

import com.example.jpa.model.entity.Member;
import com.example.jpa.repository.MemberRepository;
import com.example.jpa.service.MemberService;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;


@SpringBootTest
@Transactional
public class MemberServiceTest {

    @Autowired
    MemberService memberService;

    @Autowired
    MemberRepository memberRepository;

    @Test
    @DisplayName("회원가입")
    public void joinTest() throws Exception {

        // Given
        Member member = new Member();
        member.setName("Ygs");

        // When
        Long saveId = memberService.join(member);

        // Then
        Assertions.assertEquals(member, memberRepository.findOne(saveId));
    }

    @Test
    @DisplayName("중복테스트")
    public void joinDuplicateTest() throws Exception {

        // Given
        Member member1 = new Member();
        member1.setName("Ygs");

        Member member2 = new Member();
        member2.setName("Ygs");

        // When
        Long saveId = memberService.join(member1);

        // Then
        Assertions.assertThrows(IllegalStateException.class, () -> {
            memberService.join(member2);
        });

    }

}
