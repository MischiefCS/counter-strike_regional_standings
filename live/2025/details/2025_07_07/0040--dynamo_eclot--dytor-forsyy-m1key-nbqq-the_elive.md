### Roster Details<br />
Team Name: Dynamo Eclot<br />
Roster: Dytor, forsyy, M1key, nbqq, The eLiVe<br />
Global Rank: [40](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [28]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  744.1<br />
<br />
Final Rank Value (744.1) = Starting Rank Value (749.2) + Head To Head Adjustments (-5.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.180[<sup>2</sup>](#table1)
- Opponent Network: 0.008[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 749.2
- 400 + ( ( 0.142 - 0.000 ) / ( 0.648 - 0.000 ) ) * 1600 = 749.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent            | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |      118 | 2025-02-22 | 9Pandas             | L   | 0.296      | -            | -                | -                | -         |    -4.05 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|            5 |      158 | 2025-02-20 | Fnatic              | W   | 0.284      | 0.435        | 0.000 (0.000)    | 0.489 (0.060)    | 0 (0.000) |     2.68 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|            4 |      274 | 2025-02-14 | 500                 | L   | 0.244      | -            | -                | -                | -         |    -1.94 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|            3 |      308 | 2025-02-12 | Team Spirit Academy | W   | 0.232      | 0.435        | 0.000 (0.000)    | 0.214 (0.022)    | 0 (0.000) |     0.99 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|            2 |      528 | 2025-02-06 | 9INE                | L   | 0.189      | -            | -                | -                | -         |    -4.59 | Dytor, forsyy, M1key, nbqq, The eLiVe |
|            1 |      554 | 2025-02-05 | Nexus Gaming        | W   | 0.184      | 0.143        | 0.010 (0.000)    | 0.093 (0.002)    | 0 (0.000) |     1.80 | Dytor, forsyy, M1key, nbqq, The eLiVe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,113.33)
- Divide that value by the 5th highest value among all rosters ($49,120.83)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-23 |      0.305 | $2,000.00      | $609.63         |
| 2025-02-15 |      0.252 | $2,000.00      | $503.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
