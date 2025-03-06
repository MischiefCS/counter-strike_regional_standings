### Roster Details<br />
Team Name: Eco Warriors<br />
Roster: Angelka, D7, juliano, kyossa, vicu<br />
Global Rank: [87](../../standings_global_2025_05_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_05_05.md)<br />
Regional Rank: [63]( ../../standings_europe_2025_05_05.md)<br />
<br />
Final Rank Value:  733.6<br />
<br />
Final Rank Value (733.6) = Starting Rank Value (729.8) + Head To Head Adjustments (3.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.345[<sup>1</sup>](#table2)
- Bounty Collected: 0.214[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.046[<sup>2</sup>](#table1)

The average of these factors is 0.151<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 729.8
- 400 + ( ( 0.151 - 0.000 ) / ( 0.734 - 0.000 ) ) * 1600 = 729.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent             | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            7 |      557 | 2025-02-05 | SAW                  | L   | 0.604      | -            | -                | -                | -         |    -0.98 | Angelka, D7, juliano, kyossa, vicu |
|            6 |      564 | 2025-02-05 | 500                  | L   | 0.603      | -            | -                | -                | -         |    -4.28 | Angelka, D7, juliano, kyossa, vicu |
|            5 |      610 | 2025-02-01 | Prototype Blaze      | W   | 0.578      | 0.143        | 0.017 (0.001)    | 0.082 (0.007)    | 0 (0.000) |     8.56 | D7, juliano, kyossa, vicu, wieenN  |
|            4 |     1260 | 2024-11-24 | FURIA Esports Female | L   | 0.117      | -            | -                | -                | -         |    -1.26 | Angelka, ASTRA, D7, Hanka, vicu    |
|            3 |     1281 | 2024-11-23 | Fluxo Demons         | W   | 0.111      | 0.524        | 0.009 (0.001)    | 0.029 (0.002)    | 1 (0.111) |     1.63 | Angelka, ASTRA, D7, Hanka, vicu    |
|            2 |     1291 | 2024-11-23 | FlyQuest RED         | W   | 0.109      | 0.524        | 0.004 (0.000)    | 0.000 (0.000)    | 1 (0.109) |     0.96 | Angelka, ASTRA, D7, Hanka, vicu    |
|            1 |     1321 | 2024-11-22 | Imperial Female      | L   | 0.102      | -            | -                | -                | -         |    -0.87 | Angelka, ASTRA, D7, Hanka, vicu    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,529.31)
- Divide that value by the 5th highest value among all rosters ($122,091.46)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-24 |      0.118 | $13,000.00     | $1,529.31       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings produced by a custom mischief_sample.json, in tandem with the liquipedia.net API<br />
