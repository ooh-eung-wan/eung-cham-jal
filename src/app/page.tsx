import { Button } from '@/components/ui'
import Image from 'next/image'
import Link from 'next/link'
import { formatNumber } from '@/utils'

const Main = () => {
  const viewCount = 1024

  return (
    <div className="relative flex min-h-dvh flex-col items-center justify-end">
      <div className="absolute top-0 flex h-[calc(100dvh-20rem)] w-full flex-col items-center justify-start bg-[url(/img/main-cover.png)] bg-cover bg-bottom bg-no-repeat pb-12 pt-36">
        <div className="mx-auto mb-16 flex size-28 items-center justify-center rounded-3xl border-4 border-gray-700 bg-white">
          <Image
            src="/img/main-icon.png"
            alt="메인 아이콘"
            className="m-auto size-20"
            width={80}
            height={80}
          />
        </div>
        <Image
          src="/img/main-title.png"
          className="mx-auto h-fit w-full max-w-[86%]"
          alt="응원 참 잘하는 집"
          width={412}
          height={68}
          priority
        />
      </div>
      <div className="w-full px-6 py-20">
        <Button variant="custom" asChild>
          <Link href="/name" title="시작하기">
            시작하기
          </Link>
        </Button>
        <p className="mt-12 break-keep text-center text-lg font-medium">
          {formatNumber(viewCount)}번째 부적을 공유해주세요!
        </p>
      </div>
    </div>
  )
}

export default Main