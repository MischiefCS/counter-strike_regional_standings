### Roster Details<br />
Team Name: PaiN Gaming<br />
Roster: biguzera, dav1deuS, kauez, nqz, snow<br />
Global Rank: [8](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Americas]( ../../standings_americas_2025_08_04.md)<br />
Regional Rank: [1]( ../../standings_americas_2025_08_04.md)<br />
<br />
Final Rank Value:  1657.9<br />
<br />
Final Rank Value (1657.9) = Starting Rank Value (1656.4) + Head To Head Adjustments (1.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.892[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.012[<sup>2</sup>](#table1)
- LAN Wins: 0.657[<sup>2</sup>](#table1)

The average of these factors is 0.479<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1656.4
- 400 + ( ( 0.479 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1656.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      151 | 2025-02-21 | MOUZ             | L   | 0.102      | -            | -                | -                | -         |    -0.42 | biguzera, dav1deuS, kauez, nqz, snow |
|            6 |      184 | 2025-02-17 | Virtus.pro       | W   | 0.078      | 1.000        | 0.478 (0.037)    | 0.200 (0.016)    | 1 (0.078) |     0.41 | biguzera, dav1deuS, kauez, nqz, snow |
|            5 |      208 | 2025-02-16 | The MongolZ      | L   | 0.071      | -            | -                | -                | -         |    -1.01 | biguzera, dav1deuS, kauez, nqz, snow |
|            4 |      233 | 2025-02-15 | Team Falcons     | W   | 0.065      | 1.000        | 1.000 (0.065)    | 0.721 (0.047)    | 1 (0.065) |     1.76 | biguzera, dav1deuS, kauez, nqz, snow |
|            3 |      273 | 2025-02-14 | Astralis         | W   | 0.057      | 1.000        | 1.000 (0.057)    | 0.924 (0.053)    | 1 (0.057) |     1.55 | biguzera, dav1deuS, kauez, nqz, snow |
|            2 |      403 | 2025-02-09 | Imperial Esports | L   | 0.024      | -            | -                | -                | -         |    -0.75 | biguzera, dav1deuS, kauez, nqz, snow |
|            1 |      437 | 2025-02-08 | RED Canids       | W   | 0.019      | 0.143        | 0.000 (0.000)    | 0.017 (0.000)    | 0 (0.000) |     0.00 | biguzera, dav1deuS, kauez, nqz, snow |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,392.94)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.76) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $62,500.00     | $7,392.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
