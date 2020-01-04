import React from 'react';

class SelectedDayContainer extends React.Component {

    

    selectIcon = () => {
        console.log(this.props.weather)

        const sunnyURL = "http://icons.iconarchive.com/icons/icons-land/weather/256/Sunny-icon.png";
        const rainyURL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxATEA8TExAVFRUXFRUVFRgWFQ8PFxcSFRUdFhUYGBUYHSggGBolHRUVITIhJSktLi4uFx8zODM4NygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEBAAIDAQEAAAAAAAAAAAAAAQcIAgUGBAP/xABKEAABAwIDBQQFCgMECAcAAAABAAIDETEEBSEHEkFhcQYTUbEIFCKBkSMyVWJygpShotJCUpIVFmPxNENTk7LBwvAzREWEs9Hh/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AM3pXwQ+CnIIKTwCE8OKltAluqCk06oTRS3VLam6C1pdK8SpzKcygoPEoCpfol+nmgoNeiVr0Uv0TkEFr4ITwCnIJbQIKTwCE/FS3VLcygpNErS6ltTdOZQWvEoDxKnMpfU2QUFAa9FL9PNL9EFBr0SvgpfQJyCCk8AhPAKW0CW6oKT8VarjbmVQKXugqqiqDiTwCltAqT4XUt1QLdUt1S3VLam6BbU3TmU5lOZQOZS/RL9Ev080C/TzS/RL9E5BA5BOQ/yTkF8ec5rBhYJJ5pAyNgq5x/IAXLidABqSUH2W0C8n2g2kZTgyWSYpr5BWrIgZ3VHAlvstPJxCwb2+2p4vHufHC52Hw1SNxpo+QeMrx4/yDTrSqx8g2AxW3zBgnusFO/m90UX5DeXyw7f4q+1lz/dM06dCwLBKINkcq245VI6krZ4ObmCRg/3ZLv0r3uS57hMW3fw+IjlAvuODi37TbtPIhaYr98FjJYXtkikfG8WcxzmOHQjVBuxfU2S/TzWENnu2glzMPmRFDo3EABtDw75o0p9Ycqi5WbmuDgCDVp1qNag2ofBBb9EvoEvoE5BA5BLaBLaBLdUC3VLcyluZS2pugW1N1QOJU5lUDiUFVUqqg4k06qW6qk0UtqboFtTdOZTmU5lAHiUv0S/RL9PNAv080v0S/RcMROxjXOc9rGNFXOcQ1oHMnQIOfIJyH+S8bmm1LJYDunGtef8ACbJOP6mAt/NdSdt2TjQd/wBe6H7kGSLaBa87c80x2IxJiGGxDMJhyaOdFMxkko0fLvFtC0atabUqR85ZKwO1/JX0HrLoyf8AaRTNHvcAQPivX5VnGGxDS7D4iKYcTG9klD4HdOnvQaWotte1GzzLMa1xmw7WyH/WxARSV6gUf94FYJ7fbK8Zl4dKz5fDDUyNFHRj/FZwH1hUeNKgIPAIiICIiAss7MNq4wWGlw+M7yRjG72GLQHOHAw1J0brUE2oR4AYmRBkvtDtqzOckQbmFj4BgbK+nOR4/MNC8hJ2xzRxLjmOLvX/AEicfAB1B7l0aIPYZPtOznDkbuNfI0GpbNTEA8i59XfAhZX7Eba8NOWxY1gw8h0EgJMLjzJ1i99RpcLXhEG77SKVrWvhr8E5lYI2FdvnCRuXYh5cxwphXO1LHAV7qv8AKR83wIpxFM78ygcyqNdVL6myo16eaDlVERBxOmqnMqnxKnMoHMpfol+iX6eaBfp5pfol+i8ptL7Xty3AvlbQyuPdwA6gyEVqR/K0Ak+4cUHWbS9psGWtMMQEuKI0ZU7kYNnSEa890anlWq137Sdqcbjn7+Jnc/WrWfNjb9mMaC9K38SusxeJfLI+SR5e97i5znGpc46kkr8UBERAX74PGSxPD4pHxvFnMc5jh94ar8EQZg7DbbJ43NizAd9HoBM1oErNbvaNHt6AO042Wd8Di4p4mSxvbJG9tWuaQ5paf+6UWlCyHsi7fOwGIbBM8nCSuo4E6RPOgkHgP5h4a3CD3HazYg2fFiTBysw8L6mRjg524+v+qaP4TU+ySN2mmhAH14LYLl4A7zFYl58WmCIH3FjiB71litbW4c//AMWunbHaxnbMTPBWPCmN7mObGxsh0NPnyg1BuCAKghB7abYPlhruYjFN6ugePh3YP5ryOf7CsZGHOwuIZiAP4HD1d/QEktJ6kLoMDtfzuNwJxTZB/LJFAQfe1rXfArJXY/bdhpy2LGR+rPOgkaS+Enn/ABR341HiQgwHmWXTYeR0U8T45G3a9paeutxzsV8q2+7Wdk8FmcAZMwONKxTMpvs3h85r+IOhpY6clrB207KYjLsU6CYVHzo5ACGyR8HDwPAjgfcSHQIiICIiD9cLiXxSRyRu3Xsc17XC4e07zSOhAW6WXYkTQwy8HxskA5PaHf8ANaULaDsltJyd0OGw4xgY5kUcdJWvgBLGhvz3Dc4Wqg9/fp5q1r0XFrg4Ag1adQRqCOR8Fyr4IOSKUVQcSOJUv0VIUv080C/TzS/ReA7Y7W8uwbnRsccTKKgsiLd0OHB8thqKGlSPBY8x23vGk/JYOCMcA8yzH4gtH5INguQWtm37OjNmncA+xho2sA4d5IBI8/AsH3F2mB2+Yxv/AIuCgePqOlhPxO/5LGPaTNTisZisSRu97K94aTvFrXH2W140FBXkg61ERAREQEREBERBs7sQ7RnF5Y2N7qyYYiF2upjpWI/01b9wrH3pFZM2PGYbFNGk0ZY+g07yGgBJ8S17R9xfn6OeOc3MMTDX2ZcPvH7UTxu/k969f6R7G/2dhDTUYoD3OikJ/wCEINeEREGUtjO0OTCzsweIeThpXBrC417mVxoCDwjJNCLC+mtcu7Veyzcdl0zd2s0QdLAeO+0VLBycARS1aHgFqgtvdnWanE5XgZ3u3nuiDXk6kvjJjcepLSfeg1CRfZnETW4jEMaKNbLI1v2Q8gfkvjQEREBERB7XZ7tFxWWyNaXOlwpPtwk13QTq6In5juVjx8RtDleYxYiGKaF4fHI0Oa4fynyPAjgQVpSs3ejp2kdvYjAPNRQzw14EENlaORq1wHJx4oM50VUVQcSK9FgbbNtNe6STAYOTdjbVuIlaaF77OiaRZgsSLmosDvZH2tdqDgMtlex1JZD3MR4h7wauH2Whxr40WqKAiIgIiICIiAiIgIiICIiDJGwFhOcNI4QTE9NB5kL2XpJZg0QYDD8XSPmNtAxu4K9e8d/SVg7L8fNBI2WGV8cjfmuY4scOhHBc82zXEYmQy4iZ8r6Abz3Fx3RYCthqdB4lB8aIiAthtkvbjKYMuwmFkxjY5Wh5cJBJG0OfI59O8cN3+LxWvKINus17F5VjY96TCwuDhUSRhsbqXBEsdCfiQsI7Rdk0+BY/EYZzp8MNXVA72Jvi8DRzfrACnEcV5zsT27xmWyAxP34iayQvJ7tw40/kf9YcqgjRbR9nc7gx+FjxEJrG8ag0qHWcx44EHSn/ACKDTNFkbbN2HbgMS2eBtMNOTugWjlGrmD6pGrfeOCxygIiIC9hsjxRjzrL3DjIWe6SNzP8AqXj17PY9hDLnWAABIa50h5BkbnVPvAHvQbXooqg199JDNC7GYPD/AMMcJlPhvyvLbchEP6lh9ZG2+E/2zJXhDDTpu/8A3VY5QEREBERAREQEREBERAREQEREBERAREQFlf0fu0bosa/BOd8niAXNHhPG3e928wOB8d1qxQu57F4gx5ll7waEYmH4GQA/EEhBsnthywYjJ8YKCsTRO00rR0Rq6n3N8e9aprcLt4R/ZeZjh6piK9O6ctPUBEXKNhcQ0AkkgAAEkk6AAC5QcVnv0euyro45swlaQZR3UANQe6BBkfTwLmtA+weBXnNnmx/ETuZPj2OhgBBER9mWXjQi8bfGvteAFarYTDwNY1rWtDWtAa1rQGta0Cga0CwACD9VVFUGvPpHZaW47C4j+GWDc+/E8k/lIz4LEa2y2pdlP7Ry98TKd8w97DwrI0EFpPg5pLfCpB4LVCaJzXOa5pa5pLXNcC0tcDQgg6gg8EHBERAREQEREBERAREQEREBERAREQEREBd/2BwLps0y+NtziInH7LHB7z7mtJXQLNno/dkH778xlZQbpjw1Rcu0kkHICrAeO87wQZtx+EjlikhkbvMka5j2kkAscKOBI11BXlXbL8kt/Z7K/bnH/WvYW0F0tzKDxzdluSN/8gwnm+c/kXrvsp7OYHC6wYSGJx0JZGxrjy3qVPxXZ21N05lA5lUDiVOZVGuqC1VUqqg4k0WPdomyzDZgTOx3cYojV4FWSUsJGjjw3hr41oKZCOmqnMoNVM52WZzhy4HBulaLOgInDuYaPb+LQulPZHMx/wCnYv8ADYj9q3F5lBrrwQadf3SzP6Oxf4bEftQdksz+jsX+GxH7VuLfp5pfog05HZLM/o7F/hsR+1B2SzP6Oxf4bEftW4x10CHwCDTkdksz+jsX+GxH7U/ulmf0di/w2I/atxuQS3VBpz/dLM/o7F/hsR+1D2SzP6Oxf4bEftW41uZS2pug05PZLM/o7F/hsR+1D2SzP6Oxf4bEftW43MoPEoNOj2SzP6Oxf4bEftT+6WZ/R2L/AA2I/atxRrqbJfp5oNOh2SzP6Oxf4bEftUHZLM/o7F/hsR+1bjX6eaX0CDTtnZDMzbLsWf8A22I/au2y3ZdnUxFMC9gPGUsgA5kOId8Atrj4BOQQYa7IbDY43tkx8wmIoe5j3hHX67zRzhyAFrkLMcUbWNaxjQAAAAAGgAaAACwXK2guluZQLdUtqbpbU3TmUDmU5lOZS+pQL6lUa9FL9PNWtenmg5IiIOJ8SpzKpHEqX1NkC+psscbSdqseXTNw8eH76XdD31f3bWNd80aAkuNK000IWR79PNah7Rcz9ZzXMJuBmcxvGrIvkmH3tYEGyOzztvFmsD3tYYpIyGyxlwfTeFWua4Uq00dcA1aRwqfV30CxL6OeVlmBxU5FDNMG18WQt0/VI/4LLXIIHILGu0XazHl2I9Viw/fStDXSFz+7azeG81ugJc4gg8AARfhkq2gWnnbfMvWcyx09ah0z90/Uad1n6WtQbObPu2cWZ4UzRsLHtduSxk726+lQQ7TeaQdDQcV6e3MrF3o85d3eWSzEazzuLfsRgMH6g9ZRtqboFtTdeB2lbSo8rdFEIe+ne3f3S7u2sjqWgk0JJJB0HgdbV99zK1U2w5p6xnONINWxubC3kImhrh/Xv/FBnfZttAizVkvyfdTRU32b2+3ddXdc11BWxqKae9e0vqbLCvo2ZZRmPxJsXRwt+4C9/wDxs+CzVfp5oF+nmse7TNqEeWSRwMg76Zzd9wLjG1jCSG1IBJJIOngshX6ea1N2q5n6xnGPeDUNk7pvhSECM05VaT70GwWzjt5HmsMhEZhliIEjN7fFHV3HNdQVB3Tw0I6E+w5BYc9G7LiMNjsR/PKyIdIm7xp/vR8FmPkEDkEtoLpbQXS3MoFuZS2pultTdOZQOZTmU5lL6lAvqUv080v080v080C/TzVr4KX0Fla8Ag5URSiqDiQpfp5qkV6KX6IOt7TZl6vg8XPwihkeObmtJaB1NAtMyeJ1JWzG3vNO6yh8YvPLHFpp7LT3rvd8mB95a7dnstOJxeFg1+Vljj08HOAcfcKn3INqdmuW+r5Tl8VKO7lsj66EPl+VcDzq+nuXpraBRrQAGtFKCg5BW3VB03bPNPVcuxs9aOZC8trp8oRus/UWhacrZL0gsx7rKmxV1nmY0/Yj+UP6ms+KwJ2Ry31nH4OClRJNG1w+pvAv/SHINquweV+q5ZgISKObCwuH+I8b8g/qc5d9zKAU1P8AknMoPwx2KbFFLNIaNjY+R3JrGlxPwC0txuKdLJJI41fI9z3H6zzvH8ytpNsmZmHJsYRoZA2Fo8e8cA79G+tW8HhnSSRxtFXPc1jftOO6PzKDaLYxlRgybB1FDJvTu5944lh/oDF7e/TzX4ZfhGxRRRMFGRsbG3h7LGhoHwC/e+gQfJnOYNgw+ImPzYonyHoxpdQfBaXSyOc5z3GrnEuJNySakraDbfmncZNiGg0MzmQj7x3nD+hj1rNleCdPPBC350sjI2/ae4NHmg2n2T5b6vk+BZT2ns753DWZxkFejXNHuXrraC64YeFsbGMaNGtDQOTRQfkFztzKBbmUtqbpbU3TmUDmU5lOZS+pQL6lL9PNL9PNL9PNAv080voLJfQWTkEDkFeQU5BW2iCqqKoOJFeil9AqfBTkEGBfSRzMHEYHDA/MjfK4c5Hbra86Ru/qXndhGW99nEb+EMckvKtO7b+cgPuXWbWsy9YzjHOBq1jxC3kIWhjqfeDj71kn0bsupDjsSRq97IW9I277vd8o3+lBma3VLcyluZS2pug189I3Mi/G4TD10ihMh+3K6lKcmxtP3l12wDLBLm3ekezh4Xvr9d/yTR8HvPuXnNp2Z+sZvmEgOnemMfZhAiFOXsV96yx6OGVhuExmJI1klbGD9WJtaj3yH4IMv8yl9TZL6myX6eaDCvpJZr8ngMMOLnzO8fZG4w0578nwWPdkGVesZzgmkVbG4zO5d00uaT98MHvX3bdMzE2czNFoY44R7h3jv1SOHuXp/Rtyus2OxJHzWMhaftnfeB/Qz4oM730CcgnIJyCDB3pJZn7WAwoNhJM8czRkZ/KX4rxexTLO/wA5wxIqIg+Y/cbRh9z3MKm2nMu/znFUNWxbkI4/MbV/63PXtvRty7/T8SR/s4GHnq+Qf/GgzhbmUtqbpbU3TmUDmU5lOZS+pQL6lL9PNL9PNL9PNAv080voLJfQWTkEDkE5BOQS2gugW0F1Rp1UtzKo06oKqoqg4k8AvlzPGtggmlPzY43yO+yxpcT+S+ongF8+PwbJYZYXjebKx8bxarHtLXa9CUGlmJndI98jjVznOc4+LnGp/MrajY/lvq+TYIEe1I0zHhXvXF7f0Fg9yx0Ngc3rABxrPV964a7viytt35odTStacacFnPC4dkTGMaKNa1rGgcGtFGge4IP0tqbr4c9zAYbC4rEO17qKSSn2GlwA5mlF93Mr5c1y9mIgnhlruSxujcBod143TQ8Dqg0skkLiSSSSSSTqSTqStstleVer5PgGHQmPvXV0O9MTLr0DwPcsaYTYHN6wO8xkZw4cCS1rxK5ldW7p9lpI0rU0rWhss6RRgNa0CjWgADkNB7kHK/TzUkeKEk0aASTyF1b9PNSRocC2mhFD0OhCDS/PMwOIxOJnNayyySUOtN9xcB7q09y2O2EZZ3OTxupR08kkxrwFe7b+UYP3l4zGbA5TiSIsYwYcurVzXmVra/N3R7LiBxqK+CzZlWXx4eCHDxD2ImNjbXU7rRQEniUH1cgvzxM7Y2Pe6zWue4/VaKk/kv0toLr88RA1zHscN4PaWuHi1woR0oUGluY4x0000z/nSSPkd9p7i4/mVs3sSywYfJsMSKOmc+Y8987rP0MYvBy7A5vWKDGs9X3rlru+3a23R7JdTStQONOCzfl2CjghiiYKMjY2NgvRjGhrRzNAg+jmU5lOZS+pQL6lL9PNL9PNL9PNAv080voLJfQWTkEDkE5BOQS2gugW0F0tzKW5lLdUC3VUDiVLalUDiUFVREHEn4qW6rkVAKa8UEtqbpzKoHEoBxKCcyl9TZWlbpSvTzQS/TzS/TzVOvRD4IJfQJyCp8AnIIJyCW0F1bWulKcygluZS2puqBTXigHEoJzKcyqBxKUrdBL6lL9PNWleiHXp5oJfp5pfQWVPgh8AgnIJyCvIJayCW0F0tzKtKcygFOqCW6pbUqgcSgHEoJzKo11KUrqUv0QWqqIgiKogiFVEAoiICgVRBAiqICiqIIiqIIUKqICIiAFAqiCIqiCIqiCKoiCFVEQRERB//9k=";
        const cloudyURL = "https://cms-assets.tutsplus.com/uploads/users/16/posts/30551/final_image/cloud850.png";
        const snowyURL = "https://cdn0.iconfinder.com/data/icons/snowflakes-snow/617/Snowflakes_snow-10-512.png";

        if (this.props.weather[this.props.selectedDayId].weather === "Snowy"){
            return (
                <img src={snowyURL} height="40" width="40">
                </img>
            );
        }
        else if (this.props.weather[this.props.selectedDayId].weather === "Sunny"){
            return (
                <img src={sunnyURL} height="40" width="40">
                </img>
            );
        }
        else if (this.props.weather[this.props.selectedDayId].weather === "Cloudy"){
            return (
                <img src={cloudyURL} height="40" width="40">
                </img>
            );
        }
        else if (this.props.weather[this.props.selectedDayId].weather === "Rainy"){
            return (
                <img src={rainyURL} height="40" width="40">
                </img>
            );
        }
        return (
            <div>Error</div>
        );
    }

    render() {
    console.log(this.props.weather[this.props.selectedDayId].day);
    return (
        <div>
            <div className="selected-day-header">
            <h1>{this.props.weather[this.props.selectedDayId].day}</h1>
            <div className="selected-day-image">{this.selectIcon()}</div>
            </div>
            <table>
                <tr>
                    <th>Time</th>
                    <th>Temperature</th>
                </tr>
                <tr>
                    <td>8am</td>
                    <td>{this.props.weather[this.props.selectedDayId].eightAm}<span>&deg;C</span></td>
                </tr>
                <tr>
                    <td>12pm</td>
                    <td>{this.props.weather[this.props.selectedDayId].twelvePm}<span>&deg;C</span></td>
                </tr>
                <tr>
                    <td>3pm</td>
                    <td>{this.props.weather[this.props.selectedDayId].threePm}<span>&deg;C</span></td>
                </tr>
                <tr>
                    <td>7pm</td>
                    <td>{this.props.weather[this.props.selectedDayId].sevenPm}<span>&deg;C</span></td>
                </tr>
            </table>   
        </div>
    );
    }
}

export default SelectedDayContainer;