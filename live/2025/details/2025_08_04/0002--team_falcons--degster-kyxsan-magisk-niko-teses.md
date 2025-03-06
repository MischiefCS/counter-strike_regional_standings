### Roster Details<br />
Team Name: Team Falcons<br />
Roster: degster, kyxsan, Magisk, NiKo, TeSeS<br />
Global Rank: [2](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [2]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1991.4<br />
<br />
Final Rank Value (1991.4) = Starting Rank Value (1990.7) + Head To Head Adjustments (0.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 1.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.020[<sup>2</sup>](#table1)
- LAN Wins: 1.000[<sup>2</sup>](#table1)

The average of these factors is 0.607<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1990.7
- 400 + ( ( 0.607 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1990.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |       81 | 2025-02-23 | MOUZ            | L   | 0.118      | -            | -                | -                | -         |    -1.83 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            8 |      106 | 2025-02-22 | FaZe Clan       | W   | 0.112      | 1.000        | 1.000 (0.112)    | 0.360 (0.040)    | 1 (0.112) |     1.57 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            7 |      145 | 2025-02-21 | Eternal Fire    | W   | 0.104      | 1.000        | 0.856 (0.089)    | 0.308 (0.032)    | 1 (0.104) |     0.45 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            6 |      201 | 2025-02-17 | MOUZ            | W   | 0.076      | 1.000        | 1.000 (0.076)    | 0.802 (0.061)    | 1 (0.076) |     1.23 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            5 |      214 | 2025-02-16 | Astralis        | W   | 0.070      | 1.000        | 1.000 (0.070)    | 0.924 (0.064)    | 1 (0.070) |     1.06 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            4 |      233 | 2025-02-15 | PaiN Gaming     | L   | 0.065      | -            | -                | -                | -         |    -1.76 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            3 |      276 | 2025-02-14 | FlyQuest        | W   | 0.057      | 1.000        | 0.151 (0.009)    | 0.000 (0.000)    | 1 (0.057) |     0.00 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            2 |      366 | 2025-02-10 | BetBoom Team    | W   | 0.031      | 0.143        | 0.000 (0.000)    | 0.104 (0.000)    | 0 (0.000) |     0.00 | degster, kyxsan, Magisk, NiKo, TeSeS |
|            1 |      376 | 2025-02-10 | TEAM NEXT LEVEL | W   | 0.029      | 0.143        | 0.000 (0.000)    | 0.056 (0.000)    | 0 (0.000) |     0.00 | degster, kyxsan, Magisk, NiKo, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,178.82)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (1.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $187,500.00    | $22,178.82      |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
