### Roster Details<br />
Team Name: BIG<br />
Roster: hyped, JDC, Krimbo, kyuubii, tabseN<br />
Global Rank: [11](../../standings_global_2025_08_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_08_04.md)<br />
Regional Rank: [8]( ../../standings_europe_2025_08_04.md)<br />
<br />
Final Rank Value:  1340.7<br />
<br />
Final Rank Value (1340.7) = Starting Rank Value (1343.0) + Head To Head Adjustments (-2.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.703[<sup>1</sup>](#table2)
- Bounty Collected: 0.280[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.455[<sup>2</sup>](#table1)

The average of these factors is 0.360<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1343.0
- 400 + ( ( 0.360 - 0.000 ) / ( 0.611 - 0.000 ) ) * 1600 = 1343.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            9 |      176 | 2025-02-18 | Astralis        | L   | 0.082      | -            | -                | -                | -         |    -0.07 | hyped, JDC, Krimbo, kyuubii, tabseN |
|            8 |      200 | 2025-02-17 | Wildcard        | W   | 0.076      | 1.000        | 0.227 (0.017)    | 0.086 (0.007)    | 1 (0.076) |     0.48 | hyped, JDC, Krimbo, kyuubii, tabseN |
|            7 |      217 | 2025-02-16 | Eternal Fire    | L   | 0.069      | -            | -                | -                | -         |    -0.31 | hyped, JDC, Krimbo, kyuubii, tabseN |
|            6 |      251 | 2025-02-15 | FlyQuest        | W   | 0.062      | 1.000        | 0.151 (0.009)    | 0.000 (0.000)    | 1 (0.062) |     0.07 | hyped, JDC, Krimbo, kyuubii, tabseN |
|            5 |      282 | 2025-02-14 | MOUZ            | L   | 0.056      | -            | -                | -                | -         |    -0.04 | hyped, JDC, Krimbo, kyuubii, tabseN |
|            4 |      341 | 2025-02-11 | HEROIC          | L   | 0.036      | -            | -                | -                | -         |    -1.12 | hyped, JDC, Krimbo, kyuubii, tabseN |
|            3 |      364 | 2025-02-10 | OG              | W   | 0.031      | 0.143        | 0.000 (0.000)    | 1.000 (0.004)    | 0 (0.000) |     0.01 | hyped, JDC, Krimbo, kyuubii, tabseN |
|            2 |      374 | 2025-02-10 | BC.Game Esports | L   | 0.029      | -            | -                | -                | -         |    -0.85 | hyped, JDC, Krimbo, kyuubii, tabseN |
|            1 |      464 | 2025-02-08 | 500             | L   | 0.017      | -            | -                | -                | -         |    -0.48 | hyped, JDC, Krimbo, kyuubii, tabseN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,696.47)
- Divide that value by the 5th highest value among all rosters ($9,777.78)
- The final value (0.38) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.118 | $31,250.00     | $3,696.47       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
