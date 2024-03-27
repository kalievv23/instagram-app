import styled from 'styled-components'
import { UserList } from './UserList'
import { UserItem } from './UserItem'
import { useTypedSelector } from '../../../CustomHooks/useTypedSelector'

export const DirectWrapper = styled.div`
    display: flex;
    align-content: flex-start;
    justify-content: flex-start;
    background: #000;
    width: calc(100% - 73px);
`
const UserItemImage = styled.img`
    display: block;
    border-radius: 100%;
    margin-right: 12px;
    height: 56px;
    width: 56px;
`
const UserDescription = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 240px;
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
`
const Activity = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: rgb(168, 168, 168);
`
const UsetItemInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
`
const DirectSubHeader = styled.div`
    display: flex;
    align-items: center;
    padding: 14px 24px 10px 24px;
    height: 44px;
    width: 100%;
`
const Text = styled.h1`
    font-size: 16px;
    font-weight: 700;
    color: #fff;
`
const DirectHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 36px 24px 12px 24px;
`
const UserName = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #fff;
`
const WriteMessageBtn = styled.button`
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    display: block;
    height: 40px;
    width: 40px;
    position: relative;
`
const DirectRightArea = styled.div`
    border-right-width: 1px;
    border-right-color: rgb(38, 38, 38);
    border-right-style: solid;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`
const writeMess = (
    <svg
        style={{ position: 'absolute', top: 0, left: 0, zIndex: 9 }}
        aria-label="Новое сообщение"
        fill="#fff"
        height="24"
        role="img"
        viewBox="0 0 24 24"
        width="24"
    >
        <path
            d="M12.202 3.203H5.25a3 3 0 0 0-3 3V18.75a3 3 0 0 0 3 3h12.547a3 3 0 0 0 3-3v-6.952"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></path>
        <path
            d="M10.002 17.226H6.774v-3.228L18.607 2.165a1.417 1.417 0 0 1 2.004 0l1.224 1.225a1.417 1.417 0 0 1 0 2.004Z"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        ></path>
        <line
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            x1="16.848"
            x2="20.076"
            y1="3.924"
            y2="7.153"
        ></line>
    </svg>
)

export const Direct = () => {
    const myUserName = useTypedSelector((s) => s.auth.user?.userName)
    return (
        <DirectWrapper>
            <DirectRightArea>
                <DirectHeader>
                    <UserName>{myUserName ?? 'my username'}</UserName>
                    <WriteMessageBtn
                        onClick={(e) => {
                            console.log(' write message !!!')
                        }}
                    >
                        <div
                            onMouseDown={(e) => {
                                e.currentTarget.style.background =
                                    'rgba(0,0,0,0.5)'
                            }}
                            onMouseUp={(e) => {
                                e.currentTarget.style.background = 'none'
                            }}
                            style={{
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                zIndex: 10,
                                height: '100%',
                                width: '100%',
                            }}
                        ></div>
                        {writeMess}
                    </WriteMessageBtn>
                </DirectHeader>
                <DirectSubHeader>
                    <Text>Cooбщения</Text>
                </DirectSubHeader>{' '}
                <UserList>
                    <UserItem $isActive={false}>
                        <UserItemImage
                            alt={'user'}
                            src={
                                'https://scontent.foss2-1.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c29.0.100.100a_dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f-vGHmHjStoAX8hsG70&_nc_ad=z-m&_nc_cid=4726&_nc_ht=scontent.foss2-1.fna&oh=00_AfADd7Qz7JNkOKD6khVHArV4aEf_Dkbez7iwPl8gWQelpA&oe=66293E99'
                            }
                        />
                        <UsetItemInfo>
                            <UserDescription>
                                alsdfjsaldfj | alsdkfjölsdfjl sdfasldkfkklöasdjf
                            </UserDescription>
                            <Activity>В сети 1ч назад</Activity>
                        </UsetItemInfo>
                    </UserItem>
                    <UserItem $isActive={true}>
                        <UserItemImage
                            alt={'user'}
                            src={
                                'https://scontent.foss2-1.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c29.0.100.100a_dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f-vGHmHjStoAX8hsG70&_nc_ad=z-m&_nc_cid=4726&_nc_ht=scontent.foss2-1.fna&oh=00_AfADd7Qz7JNkOKD6khVHArV4aEf_Dkbez7iwPl8gWQelpA&oe=66293E99'
                            }
                        />
                        <UsetItemInfo>
                            <UserDescription>
                                alsdfjsaldfj | alsdkfjölsdfjl sdfasldkfkklöasdjf
                            </UserDescription>
                            <Activity>В сети 1ч назад</Activity>
                        </UsetItemInfo>
                    </UserItem>
                    <UserItem $isActive={false}>
                        <UserItemImage
                            alt={'user'}
                            src={
                                'https://scontent.foss2-1.fna.fbcdn.net/v/t1.30497-1/84628273_176159830277856_972693363922829312_n.jpg?stp=c29.0.100.100a_dst-jpg_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=f-vGHmHjStoAX8hsG70&_nc_ad=z-m&_nc_cid=4726&_nc_ht=scontent.foss2-1.fna&oh=00_AfADd7Qz7JNkOKD6khVHArV4aEf_Dkbez7iwPl8gWQelpA&oe=66293E99'
                            }
                        />
                        <UsetItemInfo>
                            <UserDescription>
                                alsdfjsaldfj | alsdkfjölsdfjl sdfasldkfkklöasdjf
                            </UserDescription>
                            <Activity>В сети 1ч назад</Activity>
                        </UsetItemInfo>
                    </UserItem>
                </UserList>
            </DirectRightArea>
        </DirectWrapper>
    )
}
